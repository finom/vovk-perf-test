import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("di")
export default class DiController {
  @operation({
    summary: "Get Di",
  })
  @get()
  static getDi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Di",
  })
  @post("{id}")
  static createDi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

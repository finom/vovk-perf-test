import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dou")
export default class DouController {
  @operation({
    summary: "Get Dou",
  })
  @get()
  static getDou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dou",
  })
  @post("{id}")
  static createDou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

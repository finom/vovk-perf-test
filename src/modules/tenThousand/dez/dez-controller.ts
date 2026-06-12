import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dez")
export default class DezController {
  @operation({
    summary: "Get Dez",
  })
  @get()
  static getDez = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dez",
  })
  @post("{id}")
  static createDez = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

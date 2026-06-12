import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iak")
export default class IakController {
  @operation({
    summary: "Get Iak",
  })
  @get()
  static getIak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iak",
  })
  @post("{id}")
  static createIak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

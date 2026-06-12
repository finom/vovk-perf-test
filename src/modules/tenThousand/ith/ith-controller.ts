import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ith")
export default class IthController {
  @operation({
    summary: "Get Ith",
  })
  @get()
  static getIth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ith",
  })
  @post("{id}")
  static createIth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

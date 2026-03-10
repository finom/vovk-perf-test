import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("il")
export default class IlController {
  @operation({
    summary: "Get Il",
  })
  @get()
  static getIl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Il",
  })
  @post("{id}")
  static createIl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

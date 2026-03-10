import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iac")
export default class IacController {
  @operation({
    summary: "Get Iac",
  })
  @get()
  static getIac = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iac",
  })
  @post("{id}")
  static createIac = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

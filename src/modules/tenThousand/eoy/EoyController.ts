import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eoy")
export default class EoyController {
  @operation({
    summary: "Get Eoy",
  })
  @get()
  static getEoy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eoy",
  })
  @post("{id}")
  static createEoy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

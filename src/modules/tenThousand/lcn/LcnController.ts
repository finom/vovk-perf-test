import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lcn")
export default class LcnController {
  @operation({
    summary: "Get Lcn",
  })
  @get()
  static getLcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lcn",
  })
  @post("{id}")
  static createLcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

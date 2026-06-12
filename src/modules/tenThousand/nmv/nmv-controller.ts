import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmv")
export default class NmvController {
  @operation({
    summary: "Get Nmv",
  })
  @get()
  static getNmv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmv",
  })
  @post("{id}")
  static createNmv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

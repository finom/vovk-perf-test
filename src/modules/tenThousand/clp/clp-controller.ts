import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clp")
export default class ClpController {
  @operation({
    summary: "Get Clp",
  })
  @get()
  static getClp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clp",
  })
  @post("{id}")
  static createClp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

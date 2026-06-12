import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("emc")
export default class EmcController {
  @operation({
    summary: "Get Emc",
  })
  @get()
  static getEmc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Emc",
  })
  @post("{id}")
  static createEmc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aci")
export default class AciController {
  @operation({
    summary: "Get Aci",
  })
  @get()
  static getAci = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aci",
  })
  @post("{id}")
  static createAci = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

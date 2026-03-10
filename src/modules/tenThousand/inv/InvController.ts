import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inv")
export default class InvController {
  @operation({
    summary: "Get Inv",
  })
  @get()
  static getInv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Inv",
  })
  @post("{id}")
  static createInv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

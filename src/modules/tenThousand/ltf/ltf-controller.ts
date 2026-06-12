import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltf")
export default class LtfController {
  @operation({
    summary: "Get Ltf",
  })
  @get()
  static getLtf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltf",
  })
  @post("{id}")
  static createLtf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

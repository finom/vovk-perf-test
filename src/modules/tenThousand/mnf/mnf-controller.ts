import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnf")
export default class MnfController {
  @operation({
    summary: "Get Mnf",
  })
  @get()
  static getMnf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnf",
  })
  @post("{id}")
  static createMnf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

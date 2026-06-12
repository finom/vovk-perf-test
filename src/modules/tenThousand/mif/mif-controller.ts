import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mif")
export default class MifController {
  @operation({
    summary: "Get Mif",
  })
  @get()
  static getMif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mif",
  })
  @post("{id}")
  static createMif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

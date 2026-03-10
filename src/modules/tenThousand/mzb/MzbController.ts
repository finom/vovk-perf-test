import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzb")
export default class MzbController {
  @operation({
    summary: "Get Mzb",
  })
  @get()
  static getMzb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mzb",
  })
  @post("{id}")
  static createMzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

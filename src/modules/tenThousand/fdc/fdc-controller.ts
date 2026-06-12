import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdc")
export default class FdcController {
  @operation({
    summary: "Get Fdc",
  })
  @get()
  static getFdc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdc",
  })
  @post("{id}")
  static createFdc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

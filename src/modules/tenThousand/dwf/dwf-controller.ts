import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwf")
export default class DwfController {
  @operation({
    summary: "Get Dwf",
  })
  @get()
  static getDwf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwf",
  })
  @post("{id}")
  static createDwf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

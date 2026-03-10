import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dgf")
export default class DgfController {
  @operation({
    summary: "Get Dgf",
  })
  @get()
  static getDgf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dgf",
  })
  @post("{id}")
  static createDgf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

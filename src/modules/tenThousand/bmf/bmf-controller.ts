import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bmf")
export default class BmfController {
  @operation({
    summary: "Get Bmf",
  })
  @get()
  static getBmf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bmf",
  })
  @post("{id}")
  static createBmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

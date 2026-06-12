import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmf")
export default class MmfController {
  @operation({
    summary: "Get Mmf",
  })
  @get()
  static getMmf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmf",
  })
  @post("{id}")
  static createMmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

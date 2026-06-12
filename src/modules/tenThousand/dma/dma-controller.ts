import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dma")
export default class DmaController {
  @operation({
    summary: "Get Dma",
  })
  @get()
  static getDma = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dma",
  })
  @post("{id}")
  static createDma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

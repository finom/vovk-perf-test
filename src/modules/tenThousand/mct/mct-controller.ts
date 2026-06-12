import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mct")
export default class MctController {
  @operation({
    summary: "Get Mct",
  })
  @get()
  static getMct = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mct",
  })
  @post("{id}")
  static createMct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

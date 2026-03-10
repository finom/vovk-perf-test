import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dct")
export default class DctController {
  @operation({
    summary: "Get Dct",
  })
  @get()
  static getDct = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dct",
  })
  @post("{id}")
  static createDct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

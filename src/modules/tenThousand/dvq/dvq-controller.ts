import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvq")
export default class DvqController {
  @operation({
    summary: "Get Dvq",
  })
  @get()
  static getDvq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvq",
  })
  @post("{id}")
  static createDvq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

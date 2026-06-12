import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsk")
export default class DskController {
  @operation({
    summary: "Get Dsk",
  })
  @get()
  static getDsk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsk",
  })
  @post("{id}")
  static createDsk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

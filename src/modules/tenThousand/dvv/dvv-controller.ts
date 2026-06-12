import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvv")
export default class DvvController {
  @operation({
    summary: "Get Dvv",
  })
  @get()
  static getDvv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvv",
  })
  @post("{id}")
  static createDvv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvh")
export default class DvhController {
  @operation({
    summary: "Get Dvh",
  })
  @get()
  static getDvh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvh",
  })
  @post("{id}")
  static createDvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

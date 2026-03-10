import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvk")
export default class DvkController {
  @operation({
    summary: "Get Dvk",
  })
  @get()
  static getDvk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvk",
  })
  @post("{id}")
  static createDvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

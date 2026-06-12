import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kth")
export default class KthController {
  @operation({
    summary: "Get Kth",
  })
  @get()
  static getKth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kth",
  })
  @post("{id}")
  static createKth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

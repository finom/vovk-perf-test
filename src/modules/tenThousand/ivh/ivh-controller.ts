import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivh")
export default class IvhController {
  @operation({
    summary: "Get Ivh",
  })
  @get()
  static getIvh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivh",
  })
  @post("{id}")
  static createIvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

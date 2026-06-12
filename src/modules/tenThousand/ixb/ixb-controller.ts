import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixb")
export default class IxbController {
  @operation({
    summary: "Get Ixb",
  })
  @get()
  static getIxb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixb",
  })
  @post("{id}")
  static createIxb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nib")
export default class NibController {
  @operation({
    summary: "Get Nib",
  })
  @get()
  static getNib = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nib",
  })
  @post("{id}")
  static createNib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

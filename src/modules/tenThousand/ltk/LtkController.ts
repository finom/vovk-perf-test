import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltk")
export default class LtkController {
  @operation({
    summary: "Get Ltk",
  })
  @get()
  static getLtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ltk",
  })
  @post("{id}")
  static createLtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

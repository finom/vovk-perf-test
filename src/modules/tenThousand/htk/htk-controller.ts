import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("htk")
export default class HtkController {
  @operation({
    summary: "Get Htk",
  })
  @get()
  static getHtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Htk",
  })
  @post("{id}")
  static createHtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbx")
export default class GbxController {
  @operation({
    summary: "Get Gbx",
  })
  @get()
  static getGbx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbx",
  })
  @post("{id}")
  static createGbx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnx")
export default class GnxController {
  @operation({
    summary: "Get Gnx",
  })
  @get()
  static getGnx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnx",
  })
  @post("{id}")
  static createGnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

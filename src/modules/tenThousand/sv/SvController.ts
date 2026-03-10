import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("sv")
export default class SvController {
  @operation({
    summary: "Get Sv",
  })
  @get()
  static getSv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Sv",
  })
  @post("{id}")
  static createSv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

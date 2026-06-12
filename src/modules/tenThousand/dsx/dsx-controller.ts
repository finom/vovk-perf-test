import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsx")
export default class DsxController {
  @operation({
    summary: "Get Dsx",
  })
  @get()
  static getDsx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dsx",
  })
  @post("{id}")
  static createDsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

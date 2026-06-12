import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtk")
export default class DtkController {
  @operation({
    summary: "Get Dtk",
  })
  @get()
  static getDtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtk",
  })
  @post("{id}")
  static createDtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

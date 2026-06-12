import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpm")
export default class LpmController {
  @operation({
    summary: "Get Lpm",
  })
  @get()
  static getLpm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpm",
  })
  @post("{id}")
  static createLpm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

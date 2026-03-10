import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxi")
export default class LxiController {
  @operation({
    summary: "Get Lxi",
  })
  @get()
  static getLxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxi",
  })
  @post("{id}")
  static createLxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

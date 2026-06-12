import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dwv")
export default class DwvController {
  @operation({
    summary: "Get Dwv",
  })
  @get()
  static getDwv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dwv",
  })
  @post("{id}")
  static createDwv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

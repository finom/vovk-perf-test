import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dvg")
export default class DvgController {
  @operation({
    summary: "Get Dvg",
  })
  @get()
  static getDvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dvg",
  })
  @post("{id}")
  static createDvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

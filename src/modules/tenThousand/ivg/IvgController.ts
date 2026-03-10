import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivg")
export default class IvgController {
  @operation({
    summary: "Get Ivg",
  })
  @get()
  static getIvg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ivg",
  })
  @post("{id}")
  static createIvg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

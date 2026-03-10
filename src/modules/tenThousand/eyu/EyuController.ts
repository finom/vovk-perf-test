import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eyu")
export default class EyuController {
  @operation({
    summary: "Get Eyu",
  })
  @get()
  static getEyu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eyu",
  })
  @post("{id}")
  static createEyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

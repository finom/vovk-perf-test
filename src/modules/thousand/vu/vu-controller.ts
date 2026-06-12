import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vu")
export default class VuController {
  @operation({
    summary: "Get Vu",
  })
  @get()
  static getVu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vu",
  })
  @post("{id}")
  static createVu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

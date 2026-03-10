import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imt")
export default class ImtController {
  @operation({
    summary: "Get Imt",
  })
  @get()
  static getImt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imt",
  })
  @post("{id}")
  static createImt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

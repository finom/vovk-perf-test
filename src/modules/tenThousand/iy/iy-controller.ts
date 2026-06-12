import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iy")
export default class IyController {
  @operation({
    summary: "Get Iy",
  })
  @get()
  static getIy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iy",
  })
  @post("{id}")
  static createIy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

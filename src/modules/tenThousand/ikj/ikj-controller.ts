import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ikj")
export default class IkjController {
  @operation({
    summary: "Get Ikj",
  })
  @get()
  static getIkj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ikj",
  })
  @post("{id}")
  static createIkj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

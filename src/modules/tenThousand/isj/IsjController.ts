import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isj")
export default class IsjController {
  @operation({
    summary: "Get Isj",
  })
  @get()
  static getIsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isj",
  })
  @post("{id}")
  static createIsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

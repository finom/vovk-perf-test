import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isn")
export default class IsnController {
  @operation({
    summary: "Get Isn",
  })
  @get()
  static getIsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isn",
  })
  @post("{id}")
  static createIsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

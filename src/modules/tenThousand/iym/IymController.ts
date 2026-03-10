import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iym")
export default class IymController {
  @operation({
    summary: "Get Iym",
  })
  @get()
  static getIym = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iym",
  })
  @post("{id}")
  static createIym = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}

import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iue")
export default class IueController {
  @operation({
    summary: "Get Iue",
  })
  @get()
  static getIue = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iue",
  })
  @post("{id}")
  static createIue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
